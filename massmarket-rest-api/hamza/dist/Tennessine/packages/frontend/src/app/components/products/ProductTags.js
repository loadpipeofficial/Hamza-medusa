// SPDX-FileCopyrightText: 2024 Mass Labs
//
// SPDX-License-Identifier: GPL-3.0-or-later
"use client";
import React, { useReducer, useState, useEffect, } from "react";
import Image from "next/image";
import Tag from "./Tag";
import { useStoreContext } from "@/context/StoreContext";
import { searchReducer, TURN_ON_SEARCH_VIS, TURN_OFF_SEARCH_VIS, ALL_TAGS, SELECT_TAG, DESELECT_TAG, } from "@/reducers/tagReducers";
const ProductsTags = ({ selectedTags, selectedTagsDispatch, itemId, setError, }) => {
    const { createTag, allTags, addProductToTag, removeProductFromTag } = useStoreContext();
    const [isSearchState, setIsSearchState] = React.useState(false);
    const [searchResults, searchDispatch] = useReducer(searchReducer, new Map());
    const [tagName, setTagName] = useState("");
    const [_selectedTags, setSelectedTags] = useState(new Map());
    if (!allTags)
        return null;
    useEffect(() => {
        setSelectedTags(selectedTags);
    }, [selectedTags]);
    const handleTagClick = () => {
        setIsSearchState(!isSearchState);
    };
    const renderSelectedTags = () => {
        if (!_selectedTags)
            return null;
        const keysArr = _selectedTags.size
            ? Array.from([..._selectedTags.keys()])
            : null;
        if (!keysArr)
            return null;
        return keysArr.map((t) => {
            const tag = allTags.get(t);
            if (!tag)
                return null;
            return (<Tag key={tag.id} tag={tag} removeFn={() => handleDeselectTag(tag)}/>);
        });
    };
    const handleSelectTag = async (t) => {
        selectedTagsDispatch({
            type: SELECT_TAG,
            payload: { selectedTag: t },
        });
        //if updating product
        if (itemId) {
            const res = await addProductToTag(t.id, itemId);
            if (res.error) {
                setError(res.error);
            }
        }
    };
    const handleDeselectTag = async (t) => {
        selectedTagsDispatch({
            type: DESELECT_TAG,
            payload: { selectedTag: t },
        });
        //if updating product
        if (itemId) {
            const res = await removeProductFromTag(t.id, itemId);
            if (res.error) {
                setError(res.error);
            }
        }
    };
    const handleChange = (event) => {
        const { value } = event.target;
        setTagName(value);
        //FIXME:search
        if (value[0] === ":") {
            console.log("creating new tag...");
        }
        else if (!value.length) {
            searchDispatch({ type: ALL_TAGS });
            return;
        }
        else {
            const tagIds = Array.from([...allTags.keys()]);
            for (const tId of tagIds) {
                const searchTag = allTags.get(tId);
                if (!searchTag)
                    return;
                if (value &&
                    searchTag.text.toLowerCase().includes(value.toLowerCase())) {
                    searchDispatch({
                        type: TURN_ON_SEARCH_VIS,
                        payload: { tag: searchTag },
                    });
                }
                else {
                    searchDispatch({
                        type: TURN_OFF_SEARCH_VIS,
                        payload: { tag: searchTag },
                    });
                }
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        tagName.length && tagName[0] === ":"
            ? createTag(tagName)
            : setError("to create a tag name, begin the tag name with :");
        setTagName("");
    };
    const renderAllTags = () => {
        const tagsToRender = searchResults.size ? searchResults : allTags;
        const _tagsToRender = Array.from([...tagsToRender.keys()]);
        if (!_tagsToRender?.length)
            return null;
        return _tagsToRender.map((t) => {
            //do not display already selected tags
            if (_selectedTags.get(t) || !allTags.get(t))
                return;
            return (<Tag key={t} onClick={() => handleSelectTag(allTags.get(t))} tag={allTags.get(t)}/>);
        });
    };
    const tagField = isSearchState ? (<div>
      <form className="relative" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
        }}>
        <input className="border-2 border-solid mt-1 px-4 py-3 w-full rounded" id="fname" name="fname" placeholder="Search your store" value={tagName} onChange={(e) => handleChange(e)}/>
        <div onClick={(e) => {
            e.preventDefault();
            setIsSearchState(false);
            setTagName("");
            searchDispatch({ type: ALL_TAGS });
        }} className="self-center absolute right-0 top-0.5 bottom-0">
          <Image src="/assets/grey-x-icon.svg" alt="checkmark-icon" width={20} height={20} className="mr-2"/>
        </div>
      </form>
    </div>) : (<div className="border border-gray-300 py-3 px-4 mt-1 flex rounded bg-white" onClick={() => handleTagClick()}>
      <Image src="/assets/add-icon.svg" alt="checkmark-icon" width={24} height={24} className="mr-2"/>
      <p className="text-blue-700 flex items-center">Add keyword tag(s)</p>
    </div>);
    return (<section>
      <div className="flex flex-row flex-wrap gap-4">
        {renderSelectedTags()}
      </div>
      {tagField}
      {isSearchState ? (<div className="border p-4 mt-4 bg-white rounded">
          <p className="text-gray-400 text-xs mb-4">Recent keyword tags</p>
          <div className="flex flex-row flex-wrap gap-4">{renderAllTags()}</div>
        </div>) : null}
    </section>);
};
export default ProductsTags;
//# sourceMappingURL=ProductTags.js.map
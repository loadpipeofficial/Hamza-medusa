import type { MedusaRequest, MedusaResponse } from '@medusajs/medusa';
import RoleService from '../../../services/role';
import { readRequestBody } from '../../../utils/request-body';

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
    // omitting validation for simplicity
    const {
        name,
        store_id,
        permissions = [],
    } = readRequestBody(req.body, ['name', 'store_id', 'permissions']);

    const roleService = req.scope.resolve('roleService') as RoleService;

    const role = await roleService.create({
        name,
        store_id,
        permissions,
    });

    res.json(role);
};

# Prompt the user to enter the name of the migration
echo "Enter the name of the migration:"
read migrationName

# Execute the TypeORM migration:create command with the user input
npx typeorm migration:create src/migrations/"$migrationName"

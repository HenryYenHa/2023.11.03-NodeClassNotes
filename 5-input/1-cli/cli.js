const args = process.argv

console.log(args)
if (args.length > 3)
{
    console.log('why hello', args[2])
}
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function BreadCrumbs({name}: {name: string}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/*home*/}
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className={"capitalize text-lg"}>home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        {/*products*/}
        <BreadcrumbItem>
          <BreadcrumbLink href="/products" className={"capitalize text-lg"}>products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator/>
        {/*page*/}
        <BreadcrumbItem>
          <BreadcrumbPage className={"capitalize text-lg"}>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GoPackageProps = typeof __propDef.props;
export type GoPackageEvents = typeof __propDef.events;
export type GoPackageSlots = typeof __propDef.slots;
export default class GoPackage extends SvelteComponentTyped<GoPackageProps, GoPackageEvents, GoPackageSlots> {
}
export {};

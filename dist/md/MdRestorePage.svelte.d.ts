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
export type MdRestorePageProps = typeof __propDef.props;
export type MdRestorePageEvents = typeof __propDef.events;
export type MdRestorePageSlots = typeof __propDef.slots;
export default class MdRestorePage extends SvelteComponentTyped<MdRestorePageProps, MdRestorePageEvents, MdRestorePageSlots> {
}
export {};

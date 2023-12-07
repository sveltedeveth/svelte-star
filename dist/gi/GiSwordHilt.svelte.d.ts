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
export type GiSwordHiltProps = typeof __propDef.props;
export type GiSwordHiltEvents = typeof __propDef.events;
export type GiSwordHiltSlots = typeof __propDef.slots;
export default class GiSwordHilt extends SvelteComponentTyped<GiSwordHiltProps, GiSwordHiltEvents, GiSwordHiltSlots> {
}
export {};

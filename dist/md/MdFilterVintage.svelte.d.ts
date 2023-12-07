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
export type MdFilterVintageProps = typeof __propDef.props;
export type MdFilterVintageEvents = typeof __propDef.events;
export type MdFilterVintageSlots = typeof __propDef.slots;
export default class MdFilterVintage extends SvelteComponentTyped<MdFilterVintageProps, MdFilterVintageEvents, MdFilterVintageSlots> {
}
export {};

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
export type MdPlaceProps = typeof __propDef.props;
export type MdPlaceEvents = typeof __propDef.events;
export type MdPlaceSlots = typeof __propDef.slots;
export default class MdPlace extends SvelteComponentTyped<MdPlaceProps, MdPlaceEvents, MdPlaceSlots> {
}
export {};

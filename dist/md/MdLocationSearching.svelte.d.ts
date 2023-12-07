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
export type MdLocationSearchingProps = typeof __propDef.props;
export type MdLocationSearchingEvents = typeof __propDef.events;
export type MdLocationSearchingSlots = typeof __propDef.slots;
export default class MdLocationSearching extends SvelteComponentTyped<MdLocationSearchingProps, MdLocationSearchingEvents, MdLocationSearchingSlots> {
}
export {};

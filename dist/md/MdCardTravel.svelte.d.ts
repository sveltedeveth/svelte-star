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
export type MdCardTravelProps = typeof __propDef.props;
export type MdCardTravelEvents = typeof __propDef.events;
export type MdCardTravelSlots = typeof __propDef.slots;
export default class MdCardTravel extends SvelteComponentTyped<MdCardTravelProps, MdCardTravelEvents, MdCardTravelSlots> {
}
export {};

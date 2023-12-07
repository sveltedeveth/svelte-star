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
export type GiBlackSeaProps = typeof __propDef.props;
export type GiBlackSeaEvents = typeof __propDef.events;
export type GiBlackSeaSlots = typeof __propDef.slots;
export default class GiBlackSea extends SvelteComponentTyped<GiBlackSeaProps, GiBlackSeaEvents, GiBlackSeaSlots> {
}
export {};

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
export type TiDirectionsProps = typeof __propDef.props;
export type TiDirectionsEvents = typeof __propDef.events;
export type TiDirectionsSlots = typeof __propDef.slots;
export default class TiDirections extends SvelteComponentTyped<TiDirectionsProps, TiDirectionsEvents, TiDirectionsSlots> {
}
export {};

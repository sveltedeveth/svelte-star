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
export type TiLocationArrowProps = typeof __propDef.props;
export type TiLocationArrowEvents = typeof __propDef.events;
export type TiLocationArrowSlots = typeof __propDef.slots;
export default class TiLocationArrow extends SvelteComponentTyped<TiLocationArrowProps, TiLocationArrowEvents, TiLocationArrowSlots> {
}
export {};

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
export type IoMdBeerProps = typeof __propDef.props;
export type IoMdBeerEvents = typeof __propDef.events;
export type IoMdBeerSlots = typeof __propDef.slots;
export default class IoMdBeer extends SvelteComponentTyped<IoMdBeerProps, IoMdBeerEvents, IoMdBeerSlots> {
}
export {};

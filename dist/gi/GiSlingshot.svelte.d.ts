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
export type GiSlingshotProps = typeof __propDef.props;
export type GiSlingshotEvents = typeof __propDef.events;
export type GiSlingshotSlots = typeof __propDef.slots;
export default class GiSlingshot extends SvelteComponentTyped<GiSlingshotProps, GiSlingshotEvents, GiSlingshotSlots> {
}
export {};

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
export type GiFruitingProps = typeof __propDef.props;
export type GiFruitingEvents = typeof __propDef.events;
export type GiFruitingSlots = typeof __propDef.slots;
export default class GiFruiting extends SvelteComponentTyped<GiFruitingProps, GiFruitingEvents, GiFruitingSlots> {
}
export {};

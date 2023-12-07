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
export type GiCircleProps = typeof __propDef.props;
export type GiCircleEvents = typeof __propDef.events;
export type GiCircleSlots = typeof __propDef.slots;
export default class GiCircle extends SvelteComponentTyped<GiCircleProps, GiCircleEvents, GiCircleSlots> {
}
export {};

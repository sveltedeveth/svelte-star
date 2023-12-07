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
export type GiPlainCircleProps = typeof __propDef.props;
export type GiPlainCircleEvents = typeof __propDef.events;
export type GiPlainCircleSlots = typeof __propDef.slots;
export default class GiPlainCircle extends SvelteComponentTyped<GiPlainCircleProps, GiPlainCircleEvents, GiPlainCircleSlots> {
}
export {};

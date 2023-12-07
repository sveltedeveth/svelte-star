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
export type GiFangsCircleProps = typeof __propDef.props;
export type GiFangsCircleEvents = typeof __propDef.events;
export type GiFangsCircleSlots = typeof __propDef.slots;
export default class GiFangsCircle extends SvelteComponentTyped<GiFangsCircleProps, GiFangsCircleEvents, GiFangsCircleSlots> {
}
export {};

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
export type GiEruptionProps = typeof __propDef.props;
export type GiEruptionEvents = typeof __propDef.events;
export type GiEruptionSlots = typeof __propDef.slots;
export default class GiEruption extends SvelteComponentTyped<GiEruptionProps, GiEruptionEvents, GiEruptionSlots> {
}
export {};

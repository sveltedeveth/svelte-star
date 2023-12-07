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
export type GiWhistleProps = typeof __propDef.props;
export type GiWhistleEvents = typeof __propDef.events;
export type GiWhistleSlots = typeof __propDef.slots;
export default class GiWhistle extends SvelteComponentTyped<GiWhistleProps, GiWhistleEvents, GiWhistleSlots> {
}
export {};

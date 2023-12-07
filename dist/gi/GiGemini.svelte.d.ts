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
export type GiGeminiProps = typeof __propDef.props;
export type GiGeminiEvents = typeof __propDef.events;
export type GiGeminiSlots = typeof __propDef.slots;
export default class GiGemini extends SvelteComponentTyped<GiGeminiProps, GiGeminiEvents, GiGeminiSlots> {
}
export {};

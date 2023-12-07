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
export type GiDeathJuiceProps = typeof __propDef.props;
export type GiDeathJuiceEvents = typeof __propDef.events;
export type GiDeathJuiceSlots = typeof __propDef.slots;
export default class GiDeathJuice extends SvelteComponentTyped<GiDeathJuiceProps, GiDeathJuiceEvents, GiDeathJuiceSlots> {
}
export {};

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
export type GiFrontalLobeProps = typeof __propDef.props;
export type GiFrontalLobeEvents = typeof __propDef.events;
export type GiFrontalLobeSlots = typeof __propDef.slots;
export default class GiFrontalLobe extends SvelteComponentTyped<GiFrontalLobeProps, GiFrontalLobeEvents, GiFrontalLobeSlots> {
}
export {};

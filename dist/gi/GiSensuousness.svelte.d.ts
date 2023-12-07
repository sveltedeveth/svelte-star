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
export type GiSensuousnessProps = typeof __propDef.props;
export type GiSensuousnessEvents = typeof __propDef.events;
export type GiSensuousnessSlots = typeof __propDef.slots;
export default class GiSensuousness extends SvelteComponentTyped<GiSensuousnessProps, GiSensuousnessEvents, GiSensuousnessSlots> {
}
export {};

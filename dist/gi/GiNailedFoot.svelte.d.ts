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
export type GiNailedFootProps = typeof __propDef.props;
export type GiNailedFootEvents = typeof __propDef.events;
export type GiNailedFootSlots = typeof __propDef.slots;
export default class GiNailedFoot extends SvelteComponentTyped<GiNailedFootProps, GiNailedFootEvents, GiNailedFootSlots> {
}
export {};

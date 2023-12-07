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
export type GiMonaLisaProps = typeof __propDef.props;
export type GiMonaLisaEvents = typeof __propDef.events;
export type GiMonaLisaSlots = typeof __propDef.slots;
export default class GiMonaLisa extends SvelteComponentTyped<GiMonaLisaProps, GiMonaLisaEvents, GiMonaLisaSlots> {
}
export {};

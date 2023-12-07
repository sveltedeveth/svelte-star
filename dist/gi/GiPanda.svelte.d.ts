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
export type GiPandaProps = typeof __propDef.props;
export type GiPandaEvents = typeof __propDef.events;
export type GiPandaSlots = typeof __propDef.slots;
export default class GiPanda extends SvelteComponentTyped<GiPandaProps, GiPandaEvents, GiPandaSlots> {
}
export {};

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
export type GiSamuraiHelmetProps = typeof __propDef.props;
export type GiSamuraiHelmetEvents = typeof __propDef.events;
export type GiSamuraiHelmetSlots = typeof __propDef.slots;
export default class GiSamuraiHelmet extends SvelteComponentTyped<GiSamuraiHelmetProps, GiSamuraiHelmetEvents, GiSamuraiHelmetSlots> {
}
export {};

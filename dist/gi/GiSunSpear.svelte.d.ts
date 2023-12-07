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
export type GiSunSpearProps = typeof __propDef.props;
export type GiSunSpearEvents = typeof __propDef.events;
export type GiSunSpearSlots = typeof __propDef.slots;
export default class GiSunSpear extends SvelteComponentTyped<GiSunSpearProps, GiSunSpearEvents, GiSunSpearSlots> {
}
export {};

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
export type GiPolarBearProps = typeof __propDef.props;
export type GiPolarBearEvents = typeof __propDef.events;
export type GiPolarBearSlots = typeof __propDef.slots;
export default class GiPolarBear extends SvelteComponentTyped<GiPolarBearProps, GiPolarBearEvents, GiPolarBearSlots> {
}
export {};

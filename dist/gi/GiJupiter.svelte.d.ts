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
export type GiJupiterProps = typeof __propDef.props;
export type GiJupiterEvents = typeof __propDef.events;
export type GiJupiterSlots = typeof __propDef.slots;
export default class GiJupiter extends SvelteComponentTyped<GiJupiterProps, GiJupiterEvents, GiJupiterSlots> {
}
export {};

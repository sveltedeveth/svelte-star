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
export type GiHypodermicTestProps = typeof __propDef.props;
export type GiHypodermicTestEvents = typeof __propDef.events;
export type GiHypodermicTestSlots = typeof __propDef.slots;
export default class GiHypodermicTest extends SvelteComponentTyped<GiHypodermicTestProps, GiHypodermicTestEvents, GiHypodermicTestSlots> {
}
export {};

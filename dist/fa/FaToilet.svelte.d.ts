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
export type FaToiletProps = typeof __propDef.props;
export type FaToiletEvents = typeof __propDef.events;
export type FaToiletSlots = typeof __propDef.slots;
export default class FaToilet extends SvelteComponentTyped<FaToiletProps, FaToiletEvents, FaToiletSlots> {
}
export {};

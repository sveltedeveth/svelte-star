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
export type FaVrCardboardProps = typeof __propDef.props;
export type FaVrCardboardEvents = typeof __propDef.events;
export type FaVrCardboardSlots = typeof __propDef.slots;
export default class FaVrCardboard extends SvelteComponentTyped<FaVrCardboardProps, FaVrCardboardEvents, FaVrCardboardSlots> {
}
export {};

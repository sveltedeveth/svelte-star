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
export type FaPersonBoothProps = typeof __propDef.props;
export type FaPersonBoothEvents = typeof __propDef.events;
export type FaPersonBoothSlots = typeof __propDef.slots;
export default class FaPersonBooth extends SvelteComponentTyped<FaPersonBoothProps, FaPersonBoothEvents, FaPersonBoothSlots> {
}
export {};

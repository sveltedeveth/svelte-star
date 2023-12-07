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
export type FaItchIoProps = typeof __propDef.props;
export type FaItchIoEvents = typeof __propDef.events;
export type FaItchIoSlots = typeof __propDef.slots;
export default class FaItchIo extends SvelteComponentTyped<FaItchIoProps, FaItchIoEvents, FaItchIoSlots> {
}
export {};

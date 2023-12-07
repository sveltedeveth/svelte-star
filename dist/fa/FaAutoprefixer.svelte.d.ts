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
export type FaAutoprefixerProps = typeof __propDef.props;
export type FaAutoprefixerEvents = typeof __propDef.events;
export type FaAutoprefixerSlots = typeof __propDef.slots;
export default class FaAutoprefixer extends SvelteComponentTyped<FaAutoprefixerProps, FaAutoprefixerEvents, FaAutoprefixerSlots> {
}
export {};

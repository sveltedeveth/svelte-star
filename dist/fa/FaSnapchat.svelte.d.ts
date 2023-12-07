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
export type FaSnapchatProps = typeof __propDef.props;
export type FaSnapchatEvents = typeof __propDef.events;
export type FaSnapchatSlots = typeof __propDef.slots;
export default class FaSnapchat extends SvelteComponentTyped<FaSnapchatProps, FaSnapchatEvents, FaSnapchatSlots> {
}
export {};

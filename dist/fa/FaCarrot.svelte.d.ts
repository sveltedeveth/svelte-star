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
export type FaCarrotProps = typeof __propDef.props;
export type FaCarrotEvents = typeof __propDef.events;
export type FaCarrotSlots = typeof __propDef.slots;
export default class FaCarrot extends SvelteComponentTyped<FaCarrotProps, FaCarrotEvents, FaCarrotSlots> {
}
export {};

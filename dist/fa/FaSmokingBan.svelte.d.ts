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
export type FaSmokingBanProps = typeof __propDef.props;
export type FaSmokingBanEvents = typeof __propDef.events;
export type FaSmokingBanSlots = typeof __propDef.slots;
export default class FaSmokingBan extends SvelteComponentTyped<FaSmokingBanProps, FaSmokingBanEvents, FaSmokingBanSlots> {
}
export {};

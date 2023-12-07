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
export type FaSoundcloudProps = typeof __propDef.props;
export type FaSoundcloudEvents = typeof __propDef.events;
export type FaSoundcloudSlots = typeof __propDef.slots;
export default class FaSoundcloud extends SvelteComponentTyped<FaSoundcloudProps, FaSoundcloudEvents, FaSoundcloudSlots> {
}
export {};

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
export type FaCss3Props = typeof __propDef.props;
export type FaCss3Events = typeof __propDef.events;
export type FaCss3Slots = typeof __propDef.slots;
export default class FaCss3 extends SvelteComponentTyped<FaCss3Props, FaCss3Events, FaCss3Slots> {
}
export {};

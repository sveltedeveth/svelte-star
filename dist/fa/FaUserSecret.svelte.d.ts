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
export type FaUserSecretProps = typeof __propDef.props;
export type FaUserSecretEvents = typeof __propDef.events;
export type FaUserSecretSlots = typeof __propDef.slots;
export default class FaUserSecret extends SvelteComponentTyped<FaUserSecretProps, FaUserSecretEvents, FaUserSecretSlots> {
}
export {};

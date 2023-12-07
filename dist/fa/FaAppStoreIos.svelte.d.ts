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
export type FaAppStoreIosProps = typeof __propDef.props;
export type FaAppStoreIosEvents = typeof __propDef.events;
export type FaAppStoreIosSlots = typeof __propDef.slots;
export default class FaAppStoreIos extends SvelteComponentTyped<FaAppStoreIosProps, FaAppStoreIosEvents, FaAppStoreIosSlots> {
}
export {};

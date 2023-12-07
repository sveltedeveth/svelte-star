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
export type FaCarSideProps = typeof __propDef.props;
export type FaCarSideEvents = typeof __propDef.events;
export type FaCarSideSlots = typeof __propDef.slots;
export default class FaCarSide extends SvelteComponentTyped<FaCarSideProps, FaCarSideEvents, FaCarSideSlots> {
}
export {};

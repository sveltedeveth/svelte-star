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
export type FaVimeoProps = typeof __propDef.props;
export type FaVimeoEvents = typeof __propDef.events;
export type FaVimeoSlots = typeof __propDef.slots;
export default class FaVimeo extends SvelteComponentTyped<FaVimeoProps, FaVimeoEvents, FaVimeoSlots> {
}
export {};

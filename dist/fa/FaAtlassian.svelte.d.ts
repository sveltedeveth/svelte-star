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
export type FaAtlassianProps = typeof __propDef.props;
export type FaAtlassianEvents = typeof __propDef.events;
export type FaAtlassianSlots = typeof __propDef.slots;
export default class FaAtlassian extends SvelteComponentTyped<FaAtlassianProps, FaAtlassianEvents, FaAtlassianSlots> {
}
export {};

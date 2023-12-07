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
export type DiAtlassianProps = typeof __propDef.props;
export type DiAtlassianEvents = typeof __propDef.events;
export type DiAtlassianSlots = typeof __propDef.slots;
export default class DiAtlassian extends SvelteComponentTyped<DiAtlassianProps, DiAtlassianEvents, DiAtlassianSlots> {
}
export {};

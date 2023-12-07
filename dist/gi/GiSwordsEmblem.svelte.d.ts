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
export type GiSwordsEmblemProps = typeof __propDef.props;
export type GiSwordsEmblemEvents = typeof __propDef.events;
export type GiSwordsEmblemSlots = typeof __propDef.slots;
export default class GiSwordsEmblem extends SvelteComponentTyped<GiSwordsEmblemProps, GiSwordsEmblemEvents, GiSwordsEmblemSlots> {
}
export {};

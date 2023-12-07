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
export type GiSpiderBotProps = typeof __propDef.props;
export type GiSpiderBotEvents = typeof __propDef.events;
export type GiSpiderBotSlots = typeof __propDef.slots;
export default class GiSpiderBot extends SvelteComponentTyped<GiSpiderBotProps, GiSpiderBotEvents, GiSpiderBotSlots> {
}
export {};

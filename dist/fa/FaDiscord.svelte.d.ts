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
export type FaDiscordProps = typeof __propDef.props;
export type FaDiscordEvents = typeof __propDef.events;
export type FaDiscordSlots = typeof __propDef.slots;
export default class FaDiscord extends SvelteComponentTyped<FaDiscordProps, FaDiscordEvents, FaDiscordSlots> {
}
export {};

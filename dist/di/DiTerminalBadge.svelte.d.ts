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
export type DiTerminalBadgeProps = typeof __propDef.props;
export type DiTerminalBadgeEvents = typeof __propDef.events;
export type DiTerminalBadgeSlots = typeof __propDef.slots;
export default class DiTerminalBadge extends SvelteComponentTyped<DiTerminalBadgeProps, DiTerminalBadgeEvents, DiTerminalBadgeSlots> {
}
export {};
